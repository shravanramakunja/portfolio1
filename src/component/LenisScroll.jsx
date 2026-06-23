import { useEffect, useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LenisScroll({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    function connect() {
      const lenis = lenisRef.current?.lenis
      if (!lenis) return

      lenis.on('scroll', ScrollTrigger.update)

      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          if (arguments.length) {
            lenis.scrollTo(value, { immediate: true })
          }
          return lenis.scroll
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
        pinType: document.body.style.transform ? 'transform' : 'fixed',
      })
    }

    gsap.ticker.add(update)
    connect()

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <ReactLenis ref={lenisRef} root autoRaf={false} options={{ lerp: 0.08, duration: 1.2 }}>
      {children}
    </ReactLenis>
  )
}
