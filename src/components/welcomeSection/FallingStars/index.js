import { useRef, useState, useEffect } from 'react';
import '../styles.css';
import insta from '../img/insta.svg';
import behance from '../img/behance.svg';
import linkedin from '../img/linkedin.svg'
import celeste from '../img/Group.svg'

const FallingImages = ({
  className = '',
  images = [],
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  imageSize = 80,
  filters = [] 
}) => {
  const containerRef = useRef(null);
  const imagesRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const [effectStarted, setEffectStarted] = useState(false);


  const [dinamycSize, setDinamycSize] = useState(imageSize)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setDinamycSize(50);
      } else if (window.innerWidth < 900) {
        setDinamycSize(60);
      } else {
        setDinamycSize(80);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!imagesRef.current || images.length === 0) return;
    
    const newHTML = images
      .map((img, i) => {
        const filter = filters[i] || '';
        return ` <img src="${img}" class="fallingImage" data-index="${i}" alt="Image ${i}" style="filter: ${filter};" />`;
      })
      .join('');
    
    imagesRef.current.innerHTML = newHTML;
  }, [images, imageSize, filters]);

  useEffect(() => {
    if (trigger === 'auto') {
      setEffectStarted(true);
      return;
    }
    if (trigger === 'scroll' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted || images.length === 0) return;

    const loadMatter = async () => {
      if (!window.Matter) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js';
        script.async = true;
        
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      const Matter = window.Matter;
      const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint, Body } = Matter;

      const containerRect = containerRef.current.getBoundingClientRect();
      const width = containerRect.width;
      const height = containerRect.height;

      if (width <= 0 || height <= 0) return;

      const engine = Engine.create();
      engine.world.gravity.y = gravity;

      const render = Render.create({
        element: canvasContainerRef.current,
        engine,
        options: {
          width,
          height,
          background: backgroundColor,
          wireframes
        }
      });

      const boundaryOptions = {
        isStatic: true,
        render: { fillStyle: 'transparent' }
      };

      const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
      const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
      const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
      const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

      const imageElements = imagesRef.current.querySelectorAll('.fallingImage');
      const imageBodies = [...imageElements].map(elem => {
        const rect = elem.getBoundingClientRect();
        const x = rect.left - containerRect.left + rect.width / 2;
        const y = rect.top - containerRect.top + rect.height / 2;

        const body = Bodies.rectangle(x, y, dinamycSize, dinamycSize, {
          render: { fillStyle: 'transparent' },
          restitution: 0.8,
          frictionAir: 0.01,
          friction: 0.2
        });

        Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 5,
          y: 0
        });
        Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
        return { elem, body };
      });

      imageBodies.forEach(({ elem, body }) => {
        elem.style.position = 'absolute';
        elem.style.left = `${body.position.x}px`;
        elem.style.top = `${body.position.y}px`;
        elem.style.transform = 'translate(-50%, -50%)';
        elem.style.width = `${dinamycSize}px`;
        elem.style.height = `${dinamycSize}px`;
      });

      const mouse = Mouse.create(containerRef.current);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: mouseConstraintStiffness,
          render: { visible: false }
        }
      });
      
      mouse.element.addEventListener('wheel', e => e.stopPropagation());
      mouse.element.addEventListener('touchmove', e => e.stopPropagation());

      World.add(engine.world, [
        floor,
        leftWall,
        rightWall,
        ceiling,
        mouseConstraint,
        ...imageBodies.map(ib => ib.body)
      ]);

      const runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);

      let animationId;
      const updateLoop = () => {
        imageBodies.forEach(({ body, elem }) => {
          const { x, y } = body.position;
          elem.style.left = `${x}px`;
          elem.style.top = `${y}px`;
          elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
        });
        animationId = requestAnimationFrame(updateLoop);
      };
      updateLoop();

      return () => {
        if (animationId) cancelAnimationFrame(animationId);
        Render.stop(render);
        Runner.stop(runner);
        if (render.canvas && canvasContainerRef.current && canvasContainerRef.current.contains(render.canvas)) {
          canvasContainerRef.current.removeChild(render.canvas);
        }
        World.clear(engine.world);
        Engine.clear(engine);
      };
    };

    loadMatter();
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness, images.length, dinamycSize]);



  return (
    <>
    <section
      ref={containerRef}
      className={`fallingImagesContainer ${className}`}>
      <article 
        ref={imagesRef} 
        className="fallingImagesTarget" 
      />
      <article 
        ref={canvasContainerRef} 
        className="fallingImagesCanvas" 
      />
      <article className='introductionContainer'>
      <p className='titleFallingStars'>¡Hola! me llamo</p>
      <div className='logoContainer'><img loading='lazy' alt='logoPrincipal' src={celeste} /></div>
      </article>
      
    </section>
    <nav className='redesContainer'>
      <div className='contred'>
        <a className='instagramContainer' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/web.gama/'  > <img alt='instagramLogo' src={insta} /></a>
        <a className='linkedinContainer' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/celestegama/'><img alt='linkedinmLogo' src={linkedin}/></a>
        <a className='behanceContainer' target="_blank" rel="noopener noreferrer" href='https://www.behance.net/celestegama'><img alt='behanceLogo' src={behance}/></a>
      </div>
    </nav>
    </>
  );
};

export default FallingImages;
