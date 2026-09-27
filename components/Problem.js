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

  return (
    <div className='flex items-center justify-center gap-3 self-center text-zinc-900 text-4xl sm:text-6xl tabular-nums whitespace-nowrap px-4 my-auto'>
      {operation === 'SQUARE_ROOT' ? (
        <>
          <span>{operator}</span>
          <span>{operands[0]}</span>
        </>
      ) : (
        <>
          <span>{operands[0]}</span>
          <span>{operator}</span>
          <span>{operands[1]}</span>
        </>
      )}
      <span>=</span>
      <span className={`${answerWidthClass} text-left inline-block empty:after:content-["\\200B"]`}>
        {answerString}
      </span>
    </div>
  );
}