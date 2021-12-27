import inspect

from django.contrib import admin
from django.db import models


class TariffTypeModel(models.Model):

    class Article(admin.ModelAdmin):
        list_display = ['name']
        ordering = ['name']

    class Meta:
        verbose_name_plural = "Типы тарифа"
        verbose_name = verbose_name_plural

    def __str__(self):
        return self.name

    name = models.TextField(verbose_name="Название типа тарифа")
    active = models.BooleanField(default=False, verbose_name="Включен ли этот тип тарифов")
