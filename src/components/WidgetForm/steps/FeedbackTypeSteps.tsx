import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackTypeStepProps {
  onClickFeedBackChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeSteps({
  onClickFeedBackChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className='flex gap-2 py-8 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => onClickFeedBackChanged(key as FeedbackType)}
              className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 transition-all ease-linear
        focus:border-brand-500 focus:outline-none
        '>
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
