class Book:
    def __init__(self,title,author,isbn,is_available=True):
        self.title=title
        self.author=author
        self.isbn=isbn
        self.is_available=is_available

    def borrow(self):
        if self.is_available:
            self.is_available=False
            return True
        return False
    def return_book(self):
        self.is_available=True
        return True
    def get_info(self):
        return f"{self.title} by {self.author} ({self.isbn})"
    def __str__(self):
        status = "Available" if self.is_available  else "Borrowed"
        return f"{self.title} by {self.author} ({self.isbn} - {status})"




class Ebook(Book):
    def __init__(self,title,author,isbn,file_size_mb,format):
        super().__init__(title,author,isbn)
        self.file_size_mb=file_size_mb
        self.format=format

    def get_info(self):
        return f"{self.title} Ebook {self.format},{self.file_size_mb} MB"
    def borrow(self):
        return True




class AudioBook(Book):
    def __init__(self,title,author,isbn,duration_hours,narrator):
        super().__init__(title,author,isbn)
        self.duration_hours=duration_hours
        self.narrator=narrator
    def get_info(self):
        return  f"{self.title} AudioBook ({self.duration_hours} hours, narrated by {self.narrator})"





class PrintedBook(Book):
    def __init__(self,title,author,isbn,pages,condition):
        super().__init__(title, author, isbn)
        self.pages=pages
        self.condition=condition
    def get_info(self):
        return f"{self.title} PrintedBook ({self.pages} pages,saved on {self.condition} condition)"
