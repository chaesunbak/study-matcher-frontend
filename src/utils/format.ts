/**
 * 주어진 Date 객체를 "YY년 MM월 DD일" 형식의 문자열로 포맷합니다.
 *
 * @param {Date} date - 포맷할 Date 객체
 * @returns {string} "YY년 MM월 DD일" 형식의 문자열
 */
export const formatDate = (date: Date): string => {
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();

  return `${year}년 ${month}월 ${day}일`;
};

export const formatDateYyyyMmDd = (dateString: Date) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
