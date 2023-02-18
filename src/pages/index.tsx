import { useEffect, useRef, useState } from 'react';
import Feedback from '../Storage/feedback.json';

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [displayArray, setDisplayArray] = useState<any[]>([]);
  const inputRef = useRef<any>(null);

  function userFeedback(input?: string) {
    const user = (
      <p>
        <span className="text-kanagawa-roninYellow">guest</span>
        <span className="text-kanagawa-oldWhite">@</span>
        <span className="text-kanagawa-crystalBlue">zigamacele</span>
        <span className="text-kanagawa-oldWhite">
          :~$ {input ? input : null}
        </span>
      </p>
    );

    return user;
  }

  function textColor() {
    if (userInput === 'help' || userInput === 'banner') return '#98BB6C';
    else return '#FF5D62';
  }

  function handleInput() {
    switch (userInput) {
      case 'banner':
        displayFeedback(userInput);
        break;
      case 'help':
        displayFeedback('help');
        break;
      case 'clear':
        setDisplayArray([]);
        break;
      default:
        setDisplayArray([
          ...displayArray,
          userFeedback(userInput),
          <div>change this</div>,
        ]);
    }
  }

  useEffect(() => {
    inputRef.current.focus();
    loadBanner();
  }, []);

  function loadBanner() {
    const bannerArray = [userFeedback()];

    Feedback.banner.map((line) => bannerArray.push(line));
    bannerArray.push(
      <div>Type &apos;help&apos; to see the list of available commands.</div>
    );
    setDisplayArray([...displayArray, ...bannerArray]);
  }

  function displayFeedback(input: string) {
    const newDisplayArray = [userFeedback(userInput)];
    Feedback[input].map((line) => newDisplayArray.push(line));
    setDisplayArray([...displayArray, ...newDisplayArray]);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleInput();
      setUserInput('');
    }
  };

  return (
    <div
      className="w-screen h-screen m-5 overflow-y-scroll"
      onClick={() => inputRef.current.focus()}
    >
      <div className="flex flex-col">
        {displayArray.map((line, index) => {
          return (
            <div
              key={index}
              className="typewriter-animation whitespace-pre text-kanagawa-fujiWhite"
            >
              {line}
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 mt-2">
        {userFeedback()}
        <input
          value={userInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserInput(e.target.value)
          }
          onKeyDown={handleKeyDown}
          className="bg-kanagawa-sumiInk1 caret-kanagawa-crystalBlue focus:ring-0 outline-none"
          autoFocus
          style={{
            color: textColor(),
          }}
          ref={inputRef}
        />
      </div>
    </div>
  );
}
