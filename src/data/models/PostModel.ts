import type { PostCategory } from "./CategoryModel";

export interface Post {
    postId: string;
    title: string;
    description?: string;
    contentUrl?: string;
    senderId: string;
    postedAt: Date;
    editedAt: Date;
    categories: PostCategory[];
}


// model Post {
//   postId      String  @id @default(ulid())
//   title       String
//   description String? @db.Text
//   contentUrl  String? @db.Text

//   senderId String
//   sender   User   @relation(references: [userId], fields: [senderId], onUpdate: Cascade, onDelete: Cascade)

//   postedAt DateTime @default(now())
//   editedAt DateTime @updatedAt

//   categories PostCategory[]

//   @@unique([senderId, postId])
//   @@index([postId])
// }

// model PostCategory {
//   categoryId String @unique
//   postId     String @unique

//   post     Post     @relation(fields: [postId], references: [postId], onUpdate: Cascade, onDelete: Cascade)
//   category Category @relation(fields: [categoryId], references: [categoryId], onUpdate: Cascade, onDelete: Cascade)

//   @@unique([postId, categoryId])
// }

// model Category {
//   categoryId String @id @default(ulid())
//   name       String @unique

//   postCategories PostCategory[]
//   userInterests  UserInterest[]

//   @@index([categoryId])
// }