import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from '../WidgetForm';

export function Widget() {
  return (
    <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className='bg-brand-500 px-3 h-12 rounded-full text-white flex justify-center items-center gap-1 group outline-0'>
        <ChatTeardropDots className='w-6 h-6' />
        <span className='max-w-0 overflow-hidden hover:max-w-full group-hover:max-w-xl transition-all duration-500 ease-linear'>
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
