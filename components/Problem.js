import { OPERATORS } from 'utils/format';

const ANSWER_WIDTHS = {
  1: 'w-[2ch]',
  2: 'w-[3ch]',
  3: 'w-[4ch]',
  4: 'w-[5ch]',
  5: 'w-[6ch]',
  6: 'w-[7ch]',
  7: 'w-[8ch]',
  8: 'w-[9ch]',
  9: 'w-[10ch]',
  10: 'w-[11ch]',
  11: 'w-[12ch]',
  12: 'w-[13ch]',
  13: 'w-[14ch]',
  14: 'w-[15ch]',
  15: 'w-[16ch]',
  16: 'w-[17ch]'
};

export default function Problem({
  operation,
  operands,
  maxAnswerLength,
  answerString
}) {
  const operator = OPERATORS[operation];
  const answerWidthClass = ANSWER_WIDTHS[maxAnswerLength] || 'w-[12ch]';

  if (operation === 'SQUARE_ROOT') {
    return (
      <div className='w-full flex justify-start pl-16 sm:pl-24 my-auto'>
        <div className='flex items-center text-zinc-900 text-3xl sm:text-5xl tabular-nums whitespace-nowrap'>
          <span className='pr-1'>{operator}</span>
          <span className='w-[10ch] text-left inline-block'>{operands[0]}</span>
          <span className='px-2'>=</span>
          <span className={`${answerWidthClass} text-left inline-block empty:after:content-["\\200B"]`}>
            {answerString}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full flex justify-start pl-16 sm:pl-24 my-auto'>
      <div className='flex items-center text-zinc-900 text-3xl sm:text-5xl tabular-nums whitespace-nowrap'>
        <span className='w-[8ch] text-right inline-block'>{operands[0]}</span>
        <span className='w-[3ch] text-center inline-block'>{operator}</span>
        <span className='w-[8ch] text-left inline-block'>{operands[1]}</span>
        <span className='px-2'>=</span>
        <span className={`${answerWidthClass} text-left inline-block empty:after:content-["\\200B"]`}>
          {answerString}
        </span>
      </div>
    </div>
  );
}