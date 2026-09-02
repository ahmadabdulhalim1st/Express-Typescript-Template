# Express TypeScript Starter API

A production-ready, modular REST API template built with **Express**, **TypeScript**, **Mongoose (MongoDB)**, **Redis**, and **Better Auth**.

---

## 🏗️ Folder Structure

```text
src/
├── common/             
│   ├── middlewares/   
│   ├── types/          
│   ├── utils/          
│   └── validators/     
│
├── config/            
│   ├── constants/      
│   ├── cors.origins.ts 
│   └── env.ts          
│
├── database/          
│   ├── mongodb.ts     
│   ├── options.ts     
│   └── redis.ts      
│
├── lib/               
│   └── auth.ts        
│
├── modules/            
│   └── auth/           
│
├── routes/            
├── app.ts             
└── server.ts         
