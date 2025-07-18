import pymysql
from pymysql.cursors import DictCursor

class UserModel:
    def __init__(self):
        try:
            self.con = pymysql.connect(
                host="127.0.0.1",
                port=3306,
                user="",
                password="",
                database="",
                cursorclass=DictCursor
            )
            self.cur = self.con.cursor()
        except pymysql.MySQLError as err:
            self.con = None
            self.cur = None
            print(f"Connection error: {err}")

    def user_getall_model(self):
        if not self.con or not self.cur:
            return {"error": "Database connection failed"}
        try:
            self.cur.execute("SELECT * FROM school_data")
            result = self.cur.fetchall()
            if result:
                return {"payload": result}
            else:
                return {"message": "No users found"}
        except pymysql.MySQLError as err:
            return {"error": str(err)}

    def user_add_one(self, data):
        try:
            query = """
                INSERT INTO school_data (id, name, email, phone, roll)
                VALUES (%s, %s, %s, %s, %s)
            """
            values = (
                data["id"],
                data["name"],
                data["email"],
                data["phone"],
                data["roll"]
            )
            self.cur.execute(query, values)
            self.con.commit()
            return {"message": "Data inserted successfully."}
        except pymysql.MySQLError as err:
            return {"error": f"Insertion Error: {err}"}

    def user_update_one(self, data):
        try:
            query = """
                UPDATE school_data
                SET name=%s, email=%s, phone=%s, roll=%s
                WHERE id=%s
            """
            values = (
                data["name"],
                data["email"],
                data["phone"],
                data["roll"],
                data["id"]
            )
            self.cur.execute(query, values)
            self.con.commit()
            return {"message": "Data updated successfully"}
        except pymysql.MySQLError as err:
            return {"error": f"Update Error: {err}"}

    def delete_one(self, id):
        try:
            query = "DELETE FROM school_data WHERE id = %s"
            self.cur.execute(query, (id,))
            self.con.commit()
            return {"message": "User deleted successfully"}
        except pymysql.MySQLError as err:
            return {"error": f"Delete Error: {err}"}
