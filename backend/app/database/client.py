import asyncpg
from app.config import QUOTIENT_DB_CONN, PRO_DB_CONN


class Database:
    def __init__(self, dsn: str):
        self.dsn: str = dsn
        self.pool: asyncpg.Pool = None

    async def connect(self):
        self.pool = await asyncpg.create_pool(self.dsn)

    async def close(self):
        if self.pool:
            await self.pool.close()


quotient_db = Database(QUOTIENT_DB_CONN)
pro_db = Database(PRO_DB_CONN)
