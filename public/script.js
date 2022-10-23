const pingApi = () => {
  console.log({ value: document.getElementById("inputNumber").value });
  fetch(
    "/api/ping?" +
      new URLSearchParams({
        value: document.getElementById("inputNumber").value,
      })
  ).then((res) => res.json());
};

const executeFunction = () => {
  var functionSwitch = document.getElementById("request").value;
  switch (functionSwitch) {
    case "creation": {
      getCreation();
      break;
    }
    case "read": {
      getRead();
      break;
    }
    case "update": {
      getUpdate();
      break;
    }
    case "delete": {
      getDelete();
      break;
    }
  }
};

const getRead = () => {
  var id = document.getElementById("player_id").value;
  var lastname = document.getElementById("last_name_player").value;
  var firstname = document.getElementById("first_name_player").value;
  var number = document.getElementById("number_player").value;
  if (id != "") {
    console.log(id);
    fetch("/players/id=" + id)
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  } else if (lastname != "") {
    fetch("/players/lastname=" + lastname)
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  } else if (firstname != "") {
    fetch("/players/firstname=" + firstname)
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  } else if (number != "") {
    fetch("/players/number=" + number)
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  } else {
    fetch("/players/")
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  }
};

const getCreation = () => {
  var lastname = document.getElementById("last_name_player").value;
  var firstname = document.getElementById("first_name_player").value;
  var age = document.getElementById("age_player").value;
  var number = document.getElementById("number_player").value;
  var position = document.getElementById("position_player").value;

  var payload = {
    last_name: lastname,
    first_name: firstname,
    jersey_number: number,
    age: age,
    position_player: position,
  };

  fetch("/players/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => alert(JSON.stringify(res)));
};

const getDelete = () => {
  var id = document.getElementById("player_id").value;
  fetch("/players/" + id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => alert(JSON.stringify(res)));
};

const getUpdate = () => {
  var id = document.getElementById("player_id").value;
  var lastname = document.getElementById("last_name_player").value;
  var firstname = document.getElementById("first_name_player").value;
  var age = document.getElementById("age_player").value;
  var number = document.getElementById("number_player").value;
  var position = document.getElementById("position_player").value;

  var payload = {
    id_player: id,
    last_name: lastname,
    first_name: firstname,
    jersey_number: number,
    age: age,
    position_player: position,
  };

  fetch("/players/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => alert(JSON.stringify(res)));
};
