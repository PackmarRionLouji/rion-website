import gsap from 'gsap';

export default {
    mounted(el) {
        el.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = el.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            const tiltX = (y - 0.5) * 12; // Degrees
            const tiltY = (x - 0.5) * -12;

            gsap.to(el, {
                rotateX: tiltX,
                rotateY: tiltY,
                scale: 1.02,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto',
                transformPerspective: 1000
            });

            // Shimmer effect on the card
            const shine = el.querySelector('.card-glass-shine') || el.querySelector('.card-glass');
            if (shine) {
                gsap.to(shine, {
                    background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.15), transparent 60%)`,
                    duration: 0.1
                });
            }
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                duration: 0.6,
                ease: 'elastic.out(1, 0.5)',
                overwrite: 'auto'
            });

            const shine = el.querySelector('.card-glass-shine') || el.querySelector('.card-glass');
            if (shine) {
                gsap.to(shine, {
                    background: `none`,
                    duration: 0.6
                });
            }
        });
    }
};
