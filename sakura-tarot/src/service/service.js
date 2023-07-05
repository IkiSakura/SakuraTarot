
export const fetchData = async () => {
    const response = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
    const data = await response.json();
     return data;
 }

//  const getRandomIndexes = (length, count) => {
//     const indexes = Array.from({ length }, (_, index) => index);
//     const shuffledIndexes = indexes.sort(() => Math.random() - 0.5);
//     return shuffledIndexes.slice(0, count);
//   };

//   export default getRandomIndexes;