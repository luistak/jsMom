type scream = string;

export default function scream(sentence: string): scream {
  return `${sentence.toUpperCase()}!`;
}