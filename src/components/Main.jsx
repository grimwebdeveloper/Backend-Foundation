import { useGSAP } from '@gsap/react';
import flowerSrc from '../../public/flower.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Main = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('img', {
      opacity: 0,
      duration: 2,
    });

    tl.from('#heading', {
      opacity: 0,
    });

    tl.fromTo(
      'img',
      { opacity: 1 },
      {
        opacity: 0.3,
        scale: 1.5,
        immediateRender: false,
        scrollTrigger: {
          markers: true,
          start: 'top 150%',
          end: 'top 0',
          scrub: 1,
          trigger: '#headingTwo',
        },
      }
    );
    tl.to('img', {
      opacity: 0.3,
      y: -250,
      scale: 2,
      immediateRender: false,
      scrollTrigger: {
        markers: true,
        start: 'top 150%',
        end: 'top 0',
        scrub: 1,
        trigger: '#headingThree',
      },
    });
  });

  return (
    <main className='max-w-screen-xl mx-auto p-4'>
      <img
        src={flowerSrc}
        alt='flower'
        className='fixed top-1/2 -translate-y-1/2 scale-125 sm:top-0 sm:translate-0 pointer-events-none'
      />
      <h2
        id='heading'
        className='text-center relative font-extrabold z-50 text-[12vw] xl:text-[153.6px] md:mt-32 h-screen text-red-100'
      >
        Floral Fragility
      </h2>
      <section
        id='headingTwo'
        className='min-h-screen py-8 md:py-12 xl:py-16 lg:w-1/2 lg:ml-auto md:px-16 lg:px-0'
      >
        <h2 className='text-3xl mb-8'>
          With an open mind and a strong dedication to the craft we are
          determined to fully reveal the essence of every piece we come across.
        </h2>
        <p>
          Whether you know him as Filthy Frank, Pink Guy, or the creator of the
          Harlem Shake, chances are that you are at least somewhat familiar with
          Joji by now. At the age of 26, George Miller, the Osaka-born and
          Brooklyn-based musician whose creative blend of R&B and alternative
          punk has touched the hearts of sad boys everywhere, became the first
          Asian artist to reach number one on the Billboard R&amp;B/Hip Hop
          charts. Just this month, he earned platinum status for his 2018
          version of a power ballad, “Slow Dancing in the Dark.” His new single
          “Sanctuary” provides a soothing sound set to an imaginative sci-fi
          music video where a bowl of Lucky Charms can be seen emotively
          swirling, making its way at a spoon. Currently, he’s enjoying himself
          in the studio. “Working on so much – lots of other music,” Joji
          confirmed, “spaghetti balls,” making his go-to meal clear. When asked
          about his current view of Vienna, “I’m working, I always forget to
          eat. I have those on demand so I just dip in. If it’s a fancy
          occasion, I’ll get the meat.” Tiramisu constituted the casual sense of
          his ultimate guide to the most important meal of the day. Spoiler
          alert: He likes Raisin Bran.
        </p>
      </section>
      <section
        id='headingThree'
        className='min-h-screen py-8 md:py-12 xl:py-16 flex flex-col gap-64 items-center justify-center lg:w-1/2 lg:ml-auto'
      >
        <h2 className='text-[16vw] leading-[16vw] lg:text-[102.4px] lg:leading-[102.4px] lg:self-start'>
          Red Pottery
          <br />
          Decorative
          <br />
          Vase
        </h2>
        <div className='flex items-center justify-between w-full'>
          <button
            type='button'
            className='rounded-full border px-8 py-4 hover:border-red-600 hover:text-red-600 transition-colors cursor-pointer'
          >
            Add to cart
          </button>
          <div className='text-[8vw] lg:text-[82px] lg:mr-16'>$57</div>
        </div>
      </section>
    </main>
  );
};

export default Main;
