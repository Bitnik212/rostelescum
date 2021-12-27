import inspect

from django.contrib import admin
from django.db import models


class TariffModel(models.Model):

    class Article(admin.ModelAdmin):
        list_display = ['title', 'price', 'published']
        ordering = ['title']

    class Meta:
        verbose_name_plural = "Тарифы"
        verbose_name = "Тарифы"

    def __str__(self):
        return self.title

    title = models.TextField(verbose_name="Название тарифа")
    price = models.IntegerField(verbose_name="Стоимость тарифа")
    published = models.BooleanField(default=False)
    type = models.ForeignKey(
        "TariffTypeModel",
        on_delete=models.CASCADE,
        verbose_name="Тип тарифа",
        null=True
    )
