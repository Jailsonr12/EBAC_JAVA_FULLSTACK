$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    let tarefa = $("#name").val();
    const lista = $(`<li>${tarefa}</li>`);

    $(lista).appendTo(".tabela-lista");
    $("#name").val("");
  });

  $(".tabela-lista").on("click", "li", function () {
    $(this).toggleClass("risco");
  });
});
