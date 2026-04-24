import { DataTable, List } from "react-admin";

const PostList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="id"/>
      <DataTable.Col source="title"/>
      <DataTable.Col source="body"/>
    </DataTable>
  </List>
);

export default PostList
