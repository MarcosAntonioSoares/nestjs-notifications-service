import { Notification as RowNotification } from '@prisma/client';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      canceledAt: notification.canceledAt,
    };
  }

  static toDomain(row: RowNotification): Notification {
    return new Notification(
      {
        category: row.category,
        content: new Content(row.content),
        recipientId: row.recipientId,
        readAt: row.readAt,
        canceledAt: row.canceledAt,
        createdAt: row.createdAt,
      },
      row.id,
    );
  }
}
