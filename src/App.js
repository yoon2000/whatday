import React, { useState, useRef } from 'react';
import Page1 from './start';
import Page2 from './Main';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

function App() {
  const [page, setPage] = useState('page1');
  const nodeRef = useRef(null);

  function handleClickImage() {
    setPage('page2');
  }

  return (
    <div>
      <TransitionGroup>
        {page === 'page1' && (
          <CSSTransition
            nodeRef={nodeRef}
            key="page1"
            timeout={500}
            classNames="slide"
          >
            <div ref={nodeRef}>
              <Page1 onClickImage={handleClickImage} />
            </div>
          </CSSTransition>
        )}
        {page === 'page2' && (
          <CSSTransition
            nodeRef={nodeRef}
            key="page2"
            timeout={500}
            classNames="slide"
          >
            <div ref={nodeRef}>
              <Page2 />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default App;
