from django.db import models

# Create your models here.


class Movie(models.Model):
    name = models.TextField()
    price = models.DecimalField(
        default=-1,
        blank=True,
        max_digits=5,
        decimal_places=2
    )
    key = models.CharField(max_length=120)

    def __str__(self):
        return self.name
