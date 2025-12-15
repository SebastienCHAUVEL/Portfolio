export function smoothScrollTo(targetY: number, duration = 1000) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function animation(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // easing (easeInOut)
    const ease =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export function scrollToElement(element: HTMLElement | null) {
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(top, 700);
  }
}

export function ucfirst(string: string) {
    const error = new TypeError(
        `You did not pass a string : ${string} is not a string`
    );

    if (string && typeof string === 'string' && Number.isNaN(Number(string))) {
        if (typeof Number(string.charAt(0)) === 'number') {
            error.message = `Call is useless : ${string.charAt(0)} is not a string`;
        }
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    throw error;
}

export function cleanMarkdown(text: string): string {
  return text
    .split('\n')
    .map(line => line.trim())
    .join('\n')
    .trim();
}
