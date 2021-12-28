import inspect

from django.contrib import admin
from django.db import models


class OrderModel(models.Model):

    class Article(admin.ModelAdmin):
        list_display = ['title', 'tariff', 'phone', 'published']
        ordering = ['title']

    class Meta:
        verbose_name_plural = "Заказы"
        verbose_name = "заказ"

    def __str__(self):
        return "Заказ #{0}".format(str(self.order_id))

    title = models.TextField(editable=False)

    def save(self, *args, **kwargs):
        super(OrderModel, self).save(*args, **kwargs)
        title = f"Заказ #{self.order_id}"
        OrderModel.objects.filter(pk=self.pk).update(title=title)

    order_id = models.AutoField(primary_key=True)
    phone = models.CharField(max_length=11, verbose_name="Номер телефона клиента")
    tariff = models.ForeignKey(
        "TariffModel",
        on_delete=models.CASCADE,
        verbose_name="Выбранный тариф",
        null=True
    )
    published = models.BooleanField(default=False)
