import { useState, useEffect } from "react";

export const State = () => {
  //ввиде объекта
  const [state, setState] = useState({
    count: 0,
    isCounting: false,
  });

  //внутри usEffect мы будем вызывать console.log, когда у нас будет новый state
  useEffect(() => {
    console.log(state);
  }, [state]);
  //   const [value, setValue] = useState(() => {
  //     const userCount = localStorage.getItem("count");
  //     // если существует userCount или если он не сущ. то возвращаем значение поумолчанию
  //     return +userCount || 0;
  //   });

  //   setValue((prevValue) => {
  //     return prevValue + 1;
  //   });

  /**Чтобы в консоле не было count: Nan, нужно выполнить следующее */
  const handleCount = () => {
    setState({
      //возьми в этот объект и скопируй все существующие ключи, которые есть, а потом один из этих ключей, возьми и перезапиши
      ...state,
      count: state.count + 1,
    });
  };

  const handleIsCounting = () => {
    setState({
      ...state,
      isCounting: !state.isCounting,
    });
  };

  return (
    <div>
      <button onClick={handleCount}>Click</button>
      <button onClick={handleIsCounting}>me too</button>

      {/* благодоря этих изменений в коде, в консоле можно влиять на два ключа, не удаляя при этом первый. Благодаря ...state,*/}
    </div>
  );
};
