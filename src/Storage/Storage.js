export const Storage = {
  banner: [
    '    dMMMMMP dMP .aMMMMP .aMMMb         dMMMMMMMMb  .aMMMb  .aMMMb  dMMMMMP dMP     dMMMMMP ',
    '     .dMP" amr dMP"    dMP"dMP        dMP"dMP"dMP dMP"dMP dMP"VMP dMP     dMP     dMP      ',
    '   .dMP"  dMP dMP MMP"dMMMMMP        dMP dMP dMP dMMMMMP dMP     dMMMP   dMP     dMMMP     ',
    ' .dMP"   dMP dMP.dMP dMP dMP        dMP dMP dMP dMP dMP dMP.aMP dMP     dMP     dMP        ',
    'dMMMMMP dMP  VMMMP" dMP dMP        dMP dMP dMP dMP dMP  VMMMP" dMMMMMP dMMMMMP dMMMMMP     ',
  ],
  help: [
    'Welcome! Here are all the available commands:',
    <br key={'Help'} />,
    'about, projects, github, help,',
    'theme, banner, history, clear',
  ],
  github: [
    <a key={'Github'} href="https://github.com/zigamacele">
      github.com/zigamacele
    </a>,
  ],
  theme: [
    'Color theme is inspired by:',
    <a key={'Theme'} href="https://github.com/rebelot/kanagawa.nvim">
      kanagawa.nvim
    </a>,
  ],
  about: [
    'Hello,',
    'If you want to know more about me check:',
    <br key={'Break1'} />,
    <a key={'About'} href="https://github.com/zigamacele">
      github.com/zigamacele
    </a>,
  ],
  projects: [
    <div key={'Projects'}>
      Twitter Clone (NextJS, TailwindCSS, Firebase)
      <span className="ml-[15em]">
        <a
          href="https://twitter-clone-zigamacele.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          [DEMO]
        </a>
        <a
          href="https://github.com/zigamacele/twitter-clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          [REPO]
        </a>
      </span>
    </div>,
    <div key={'Terminal'}>
      Terminal Website (NextJS, Typescript, TailwindCSS)
      <span className="ml-[15.6em]">
        <a
          href="https://github.com/zigamacele/terminal-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          [REPO]
        </a>
      </span>
    </div>,
    <div key={'Shopping-cart'}>
      Shopping Cart (React, TailwindCSS)
      <span className="ml-[22.1em]">
        <a
          href="https://zigamacele.github.io/shopping-cart/"
          target="_blank"
          rel="noopener noreferrer"
        >
          [DEMO]
        </a>
        <a
          href="https://github.com/zigamacele/shopping-cart"
          target="_blank"
          rel="noopener noreferrer"
        >
          [REPO]
        </a>
      </span>
    </div>,
    <div key={'Memory game'}>
      Memory Game (React)
      <span className="ml-[31.89em]">
        <a
          href="https://zigamacele.github.io/memory-game/"
          target="_blank"
          rel="noopener noreferrer"
        >
          [DEMO]
        </a>
        <a
          href="https://github.com/zigamacele/memory-game"
          target="_blank"
          rel="noopener noreferrer"
        >
          [REPO]
        </a>
      </span>
    </div>,
  ],
};
