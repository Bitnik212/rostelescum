from django.contrib import admin
from django.db import models


class TariffPropsModel(models.Model):
    class Article(admin.ModelAdmin):
        list_display = ['title', "description"]
        ordering = ['title']

    class Meta:
        verbose_name_plural = "Описание тарифов"
        verbose_name = verbose_name_plural

    def __str__(self):
        return self.title

    title = models.TextField()
    description = models.TextField()
    icon_name = models.CharField(max_length=300)
