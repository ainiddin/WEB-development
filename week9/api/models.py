from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    rating = models.FloatField(default=0.0)
    image = models.URLField(max_length=500)
    images = models.JSONField(default=list)
    link = models.URLField(max_length=500)
    likes = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name