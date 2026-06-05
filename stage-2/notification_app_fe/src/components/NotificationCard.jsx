import { Card, CardContent, Typography } from "@mui/material";

function NotificationCard({ item }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {item.Message}
        </Typography>

        <Typography>
          Type: {item.Type}
        </Typography>

        <Typography>
          {item.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;