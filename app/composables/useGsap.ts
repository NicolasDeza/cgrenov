let gsapInstance: { gsap: (typeof import("gsap"))["gsap"] } | null = null;

export const useGsap = async () => {
  if (import.meta.server) return null;
  if (gsapInstance) return gsapInstance;

  const { gsap } = await import("gsap");
  const { default: ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);
  gsapInstance = { gsap };

  return gsapInstance;
};
