import { useEffect, useRef, useState } from 'react';
import { Storage } from '../Storage/Storage';

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [displayArray, setDisplayArray] = useState<any[]>([]);
  const [history, setHistory] = useState([]);
  const inputRef = useRef<any>(null);
  const historyRef = useRef(0);

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
    if (
      userInput === 'help' ||
      userInput === 'banner' ||
      userInput === 'about' ||
      userInput === 'projects' ||
      userInput === 'github' ||
      userInput === 'theme' ||
      userInput === 'clear' ||
      userInput === 'history'
    )
      return '#98BB6C';
    else return '#FF5D62';
  }

  function handleInput() {
    const commands = [
      'about',
      'projects',
      'history',
      'github',
      'theme',
      'help',
    ];
    if (userInput === 'history')
      return setDisplayArray([...displayArray, ...history]);
    if (userInput === 'banner') return loadBanner();
    if (userInput === 'clear') return setDisplayArray([]);
    if (commands.includes(userInput)) displayFeedback(userInput);
    else
      setDisplayArray([
        ...displayArray,
        userFeedback(userInput),
        <div className="text-kanagawa-katanaGray">
          Command not found. For a list of commands, type 'help'
        </div>,
      ]);
  }

  useEffect(() => {
    inputRef.current.focus();
    loadBanner();
  }, []);

  function loadBanner() {
    const bannerArray = [userFeedback()];

    Storage.banner.map((line) => bannerArray.push(line));
    bannerArray.push(
      <div>Type &apos;help&apos; to see the list of available commands.</div>
    );
    setDisplayArray([...displayArray, ...bannerArray]);
  }

  function displayFeedback(input: string) {
    const newDisplayArray = [userFeedback(userInput)];
    Storage[input].map((line) => newDisplayArray.push(line));
    setDisplayArray([...displayArray, ...newDisplayArray]);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleInput();
      setHistory([...history, userInput]);
      setUserInput('');
      historyRef.current = 0;
    }
    if (history.length > 0) {
      if (event.key === 'ArrowUp') {
        if (history.length - 1 - historyRef.current >= 0) {
          setUserInput(history[history.length - 1 - historyRef.current]);
          historyRef.current = historyRef.current + 1;
        }
      }
      if (event.key === 'ArrowDown') {
        if (history.length - 1 - historyRef.current < history.length - 1) {
          historyRef.current = historyRef.current - 1;
          setUserInput(history[history.length - 1 - historyRef.current]);
        }
      }
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
