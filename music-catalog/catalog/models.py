from django.db import models

class Artist(models.Model):
    name = models.CharField(max_length=100)
    genre = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    formed_year = models.IntegerField()
    is_active = models.BooleanField(default=True)
    def __str__(self):
        return self.name

class Album(models.Model):
    title = models.CharField(max_length=200)
    release_year = models.IntegerField()
    tracks_count = models.IntegerField()
    duration_mins = models.IntegerField()
    price = models.FloatField()
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    def __str__(self):
        return self.title
