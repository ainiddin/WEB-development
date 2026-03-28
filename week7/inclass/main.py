from week7.inclass.models import Ebook, AudioBook, PrintedBook


def get_available_books(books):
    return [book for book in books if book.is_available]

def get_books_by_author(books,author_name):
    return [book for book in books if author_name.lower() in book.author.lower()]

def count_by_type(books):
    counter={
        "Ebook":0,
        "AudioBook":0,
        "PrintedBook":0
    }
    for book in books:
        if isinstance(book,Ebook):counter["Ebook"]+=1
        elif isinstance(book,AudioBook):counter["AudioBook"]+=1
        elif isinstance(book,PrintedBook):counter["PrintedBook"]+=1
    return counter


books=[
    Ebook("Python Crash Course","Eric Matthes","978-1593279288",15.5,"PDF"),
    Ebook("Clean Code","Robert Martin","978-0132350884",8.2,"EPUB"),
    AudioBook("Atomic Habits","James Clear","978-0735211292",5.5,"James Clear"),
    AudioBook("The Pragmatic Programmer","David Thomas","978-0135957059",9.0,"Anna Fields"),
    PrintedBook("1984","George Orwell","978-0451524935",328,"Good"),
    PrintedBook("Dune","Frank Herber","978-0441172719",412,"New")
]
print("=== Library Inventory ===")
for book in books:
    print(book)
print("=== Borrowing Books ===")
for i in range(4,6):
    print(f"Borrowing '{books[i]}': {"Success" if books[i].borrow else "Failed"}")

print("\n=== Borrowing Books Again ===")
for i in range(4,6):
    print(f"Borrowing '{books[i]}' again: {"Success" if books[i].borrow else "Failed"}")

print("\n=== Borrowing EBook ===")
ebook=books[0]
print(f"Borrowing '{ebook.title}' (ebook): {'Success' if ebook.borrow() else 'Failed'} always available")
print("\n=== Returning Books ===")
book1984 = books[4]
print(f"Returning '1984': {'Success' if book1984.return_book() else 'Failed'}")

print("\n=== Available Books ===")
avail = get_available_books(books)
print(f"{len(avail)} books available")

print("\n=== Books by Robert Martin ===")
for book in get_books_by_author(books,"Robert Martin"):
    print(f"{book.title} by {book.author}")

print("\n=== Inventory Count ===")
counts=count_by_type(books)
for btype, count in counts.items():
    print(f"{btype}: {count}")

print("\n=== Book Details (Polymorphism) ===")
for b in books:
    print(b.get_info())