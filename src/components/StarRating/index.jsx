
export default function StarRating ({ rate, count }){
  const MAX_STARS = 5;
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate - fullStars >= 0.5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <svg key={`full-${i}`} xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#facc15" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.75.75 0 011.04 0l2.35 2.38a.75.75 0 00.53.22h3.32a.75.75 0 01.44 1.35l-2.62 2.19a.75.75 0 00-.26.82l1.02 3.49a.75.75 0 01-1.13.83L12 13.69l-3.19 2.07a.75.75 0 01-1.13-.83l1.02-3.49a.75.75 0 00-.26-.82L5.82 7.45a.75.75 0 01.44-1.35h3.32a.75.75 0 00.53-.22l2.35-2.38z" />
      </svg>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <svg key={`half`} xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#facc15" className="w-5 h-5">
        <defs>
          <linearGradient id="halfGrad">
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path fill="url(#halfGrad)" stroke="#facc15" d="M11.48 3.499a.75.75 0 011.04 0l2.35 2.38a.75.75 0 00.53.22h3.32a.75.75 0 01.44 1.35l-2.62 2.19a.75.75 0 00-.26.82l1.02 3.49a.75.75 0 01-1.13.83L12 13.69l-3.19 2.07a.75.75 0 01-1.13-.83l1.02-3.49a.75.75 0 00-.26-.82L5.82 7.45a.75.75 0 01.44-1.35h3.32a.75.75 0 00.53-.22l2.35-2.38z" />
      </svg>
    );
  }

  const emptyStars = MAX_STARS - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <svg key={`empty-${i}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#d4d4d8" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.75.75 0 011.04 0l2.35 2.38a.75.75 0 00.53.22h3.32a.75.75 0 01.44 1.35l-2.62 2.19a.75.75 0 00-.26.82l1.02 3.49a.75.75 0 01-1.13.83L12 13.69l-3.19 2.07a.75.75 0 01-1.13-.83l1.02-3.49a.75.75 0 00-.26-.82L5.82 7.45a.75.75 0 01.44-1.35h3.32a.75.75 0 00.53-.22l2.35-2.38z" />
      </svg>
    );
  }

  return (
    <div className="flex items-center gap-1" data-testid="star-rating-container">
      {stars}
      {count && <span className="ml-2 text-sm">
        {rate} out of {count} ratings
      </span>}
    </div>
  );
};
