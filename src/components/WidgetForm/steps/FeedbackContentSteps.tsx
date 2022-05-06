import { ArrowArcLeft, ArrowLeft, Camera } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton/ScreenshotButton';

interface FeedbackTypePropsSteps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequest: () => void;
  feedbackSent: () => void;
}

export function FeedbackContentSteps({
  feedbackType,
  onFeedbackRestartRequest,
  feedbackSent,
}: FeedbackTypePropsSteps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [screenshot, setScreenshotInfo] = useState<string | null>(null);
  const [comment, setCommentText] = useState('');

  function handleFeedbackSubmit(event: FormEvent) {
    event.preventDefault();
    feedbackSent();
  }
  return (
    <>
      <header className='flex items-center gap-2'>
        <button
          className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
          onClick={onFeedbackRestartRequest}>
          <ArrowLeft weight='bold' className='w-4 h-4 ' />
        </button>
        <img
          className='w-6 h-auto'
          src={feedbackTypeInfo.image.source}
          alt={feedbackTypeInfo.image.alt}
        />
        <span className='text-xl leading-6'>{feedbackTypeInfo.title}</span>
        <CloseButton />
      </header>

      <form onSubmit={handleFeedbackSubmit} className='my-4 w-full'>
        <textarea
          onChange={e => setCommentText(e.target.value)}
          className='min-w-[304px] w-full min-h-[112px] text-sm  placeholder:text-zinc-400 text-zinc-100  border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
          placeholder='Conte com detalhes o que está acontecendo...'
        />

        <footer className='flex gap-2 mt-1'>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshotInfo}
          />

          <button
            disabled={comment.length == 0 ? true : false}
            type='submit'
            className='p-2 bg-brand-500  border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 rounded-md disabled:opacity-50 disable:hover:bg-brand-500 transition-opacity'>
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
}
