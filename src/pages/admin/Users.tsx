import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const mockUsers = [
  { id: "USR001", name: "Alice Johnson", email: "alice@example.com", plan: "Pro", status: "Active" },
  { id: "USR002", name: "Bob Williams", email: "bob@example.com", plan: "Starter", status: "Active" },
  { id: "USR003", name: "Charlie Brown", email: "charlie@example.com", plan: "Pro", status: "Inactive" },
  { id: "USR004", name: "Diana Prince", email: "diana@example.com", plan: "Enterprise", status: "Active" },
  { id: "USR005", name: "Ethan Hunt", email: "ethan@example.com", plan: "Starter", status: "Active" },
];

const Users = () => {
  return (
    <div className="p-6 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">User Management</h1>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.plan}</TableCell>
                <TableCell>
                  <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                    {user.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Users;