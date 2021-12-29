from django.contrib import admin
from django.db import models


class TariffPropsModel(models.Model):
    class Article(admin.ModelAdmin):
        list_display = ['title', "description"]
        ordering = ['title']

    class Meta:
        verbose_name_plural = "Свойства тарифов"
        verbose_name = verbose_name_plural

    def __str__(self):
        return f"{self.title} ({self.description})"

    title = models.CharField(max_length=60)
    description = models.CharField(max_length=60)
    icon_name = models.CharField(blank=True, max_length=300)
