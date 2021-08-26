import React from "react";
import MySelect from "../UI/select/MySelect";
import MyInput from "../UI/input/MyInput";

function PostsFilter({ filter, setFilter }) {
  return (
    <div>
      <hr style={{ margin: "15px 0" }} />
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <MySelect
        defaultValue="Sort"
        options={[
          { value: "title", name: "Title" },
          { value: "body", name: "Description" },
        ]}
        value={filter.sort}
        onChange={(selectedSort) => {
          setFilter({ ...filter, sort: selectedSort });
        }}
      />
    </div>
  );
}

export default PostsFilter;
