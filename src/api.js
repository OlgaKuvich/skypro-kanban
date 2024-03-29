const API_URL_USER = `https://wedev-api.sky.pro/api/user`;
const API_URL = `https://wedev-api.sky.pro/api/kanban`;
const token = "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";

export async function login({ login, password }) {
  const response = await fetch(API_URL_USER + `/login`, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error(alert("Ошибка сервера"));
  }
  const data = await response.json();
  return data;
}

export async function getTasks() {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok === 200) {
    throw new Error(alert("Ошибка сервера"));
  }
  const data = await response.json();
  return data;
}

export async function registerUser({ login, name, password }) {
  const response = await fetch(API_URL_USER + `/login`, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error(alert("Пользователь с таким именем уже существует"));
  }
  const user = await response.json();
  return user;
}

export async function createTasks(inputData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(inputData),
  });

  if (response.status === 400) {
    throw new Error(alert("Введите все данные"));
  } else {
    const data = await response.json();
    return data;
  }
}

export async function deleteTasks(id) {
  const response = await fetch(API_URL + `/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status >= 400) {
    throw new Error(alert("Ошибка удаления"));
  } else {
    const data = await response.json();
    return data;
  }
}

export async function editTasks({
  token,
  id,
  title,
  topic,
  status,
  description,
  date,
}) {
  const response = await fetch(API_URL + `/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
    }),
  });

  if (response.status >= 400) {
    throw new Error(alert("Ошибка редактирования"));
  } else {
    const data = await response.json();
    return data;
  }
}
