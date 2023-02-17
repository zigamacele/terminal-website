import { useEffect, useRef, useState } from 'react';
import Logo from '../Storage/logo.json';

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [array, setArray] = useState<string[]>([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      setArray([...array, 'guest@zigamacele:~$ ' + userInput, userInput]);
      setUserInput('');
    }
  };

  return (
    <div className="w-screen h-screen" onClick={() => inputRef.current.focus()}>
      <div className="flex flex-col gap-0 space-y-[-4px]">
        {Logo.logo.map((line, index) => {
          return (
            <p key={index} className="whitespace-pre text-kanagawa-waveBlue2 ">
              {line}
            </p>
          );
        })}
      </div>
      {array.map((line, index) => {
        return (
          <p key={index} className="typewriter-animation">
            {line}
          </p>
        );
      })}
      <div className="flex gap-2">
        <p>guest@zigamacele:~$ </p>
        <input
          value={userInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserInput(e.target.value)
          }
          onKeyDown={handleKeyDown}
          className="bg-kanagawa-sumiInk1 caret-kanagawa-crystalBlue focus:ring-0 outline-none text-kanagawa-fujiWhite"
          autoFocus
          ref={inputRef}
        />
      </div>
    </div>
  );
}
