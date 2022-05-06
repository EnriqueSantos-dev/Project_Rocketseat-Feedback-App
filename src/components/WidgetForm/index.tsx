import { useState } from 'react';

import ideiaUrlImg from '../../assets/ideia.svg';
import bugUrlImg from '../../assets/bug.svg';
import thoughtUrlImg from '../../assets/thought.svg';
import { FeedbackTypeSteps } from './steps/FeedbackTypeSteps';
import { FeedbackContentSteps } from './steps/FeedbackContentSteps';
import { FeedbackSucessStep } from './steps/FeedbackSucessStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugUrlImg,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideiaUrlImg,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thoughtUrlImg,
      alt: 'Imagem de uma balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function HandleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center shadow-lg mb-4 w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent ? (
        <FeedbackSucessStep onFeedbackRestartRequest={HandleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeSteps onClickFeedBackChanged={setFeedbackType} />
          ) : (
            <FeedbackContentSteps
              feedbackType={feedbackType}
              onFeedbackRestartRequest={HandleRestartFeedback}
              feedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className='text-xs text-neutral-400'>
        feito com ♡ pela
        <a
          className='underline underline-offset-2'
          href='https://rocketseat.com.br'>
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
