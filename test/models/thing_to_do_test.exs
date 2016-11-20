defmodule IdotodosEx.ThingToDoTest do
  use IdotodosEx.ModelCase

  alias IdotodosEx.ThingToDo

  @valid_attrs %{address: "some content", description: "some content", name: "some content", phone_number: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = ThingToDo.changeset(%ThingToDo{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = ThingToDo.changeset(%ThingToDo{}, @invalid_attrs)
    refute changeset.valid?
  end
end
