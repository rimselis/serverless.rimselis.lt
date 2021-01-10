export const sanity = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `We are live! ${(await message({ time: 3, copy: 'Your function executed successfully!'}))}`,
    }),
  };
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a ${time} second${time === 1 ? '' : 's'} delay)`);
  }, time * 1000)
);
