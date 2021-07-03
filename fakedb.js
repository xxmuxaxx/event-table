const faker = require("faker");
faker.locale = "ru";

const getRandomInt = (max) => Math.floor(Math.random() * (Math.floor(max) + 1));

const types = ["Изменение", "Добавление", "Удаление"];
const result = ["Успешно", "Неуспешно"];

module.exports = () => {
  const data = { events: [], eventsDetail: [] };
  for (let i = 0; i < 231; i++) {
    data.events.push({
      id: i,
      login: faker.internet.userName(),
      date: faker.datatype.datetime(),
      name: faker.name.findName(),
      ip: faker.internet.ip(),
      type: types[getRandomInt(types.length - 1)],
      result: result[getRandomInt(result.length - 1)],
      obj_name: faker.commerce.productName(),
      description: faker.lorem.words(),
    });

    data.eventsDetail.push({
      id: i,
      obj_type: "Директория",
      id_dir: i + 1,
      link: "#",
      id_group: i + 1,
      group: getRandomInt(20),
      flags: [
        getRandomInt(1) === 1 ? "Чтение" : null,
        getRandomInt(1) === 1 ? "Изменения" : null,
        getRandomInt(1) === 1 ? "Управление доступом" : null,
      ].filter((item) => item !== null),
    });
  }
  return data;
};
