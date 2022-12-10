export const typeWriter = function (
  this: any,
  textElement: Element | null,
  sortedWords: string[]
) {
  this.textElement = textElement;
  this.words = sortedWords;
  this.currentWord = "";
  this.wordIndex = 0;
  this.wait = 3000;
  this.type();
  this.isDeleting = false;
} as any as { new (textElement: Element | null, sortedWords: string[]): any };

// Type Method
typeWriter.prototype.type = function (this: any) {
  const currentWordIndex = this.wordIndex % this.words.length;
  const fullWord = this.words[currentWordIndex];

  if (this.isDeleting) {
    this.currentWord = fullWord.substring(0, this.currentWord.length - 1);
  } else {
    this.currentWord = fullWord.substring(0, this.currentWord.length + 1);
  }

  this.textElement.innerHTML = `<span>${this.currentWord}</span>`;

  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  if (!this.isDeleting && this.currentWord === fullWord) {
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if (this.isDeleting && this.currentWord === "") {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};