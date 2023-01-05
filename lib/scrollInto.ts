const scrollInto = (element: HTMLElement | null) => {
  if (!element) return;

  window.scrollTo({
    top: element.offsetTop - 58,
    behavior: 'smooth',
  });
};

export default scrollInto;
