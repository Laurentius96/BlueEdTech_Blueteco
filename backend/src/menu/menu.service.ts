import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

// 138°) Importando o dto, PrismaService, CreatePrope
import { Menu } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';

// 148°) Imortando updateMenuDto...
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  // 139°) Criamos o consctructor...
  constructor(private prismaService: PrismaService) {}

  // 140°) Create...
  async create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const itemExiste = await this.prismaService.menu.findUnique({
      where: { item: createMenuDto.item },
    });

    if (itemExiste) {
      throw new ConflictException('Item já está presente no menu.');
    }

    const createdMenu = await this.prismaService.menu.create({
      data: {
        item: createMenuDto.item,
        preco: createMenuDto.preco,
        descricao: createMenuDto.descricao,
        imagemUrl: createMenuDto.imagemUrl,
      },
    });

    return createdMenu;
  }

  // 141°) Find Many...
  async findMany(): Promise<Menu[]> {
    const menus = await this.prismaService.menu.findMany();
    return menus;
  }

  // 142°) Delete...
  async delete(menuId: string) {
    const itemFinded = await this.prismaService.menu.findUnique({
      where: {
        id: menuId,
      },
    });

    if (!itemFinded) {
      throw new NotFoundException(
        'O item que você deseja deletar não foi encontrado',
      );
    }
    const deleteItem = await this.prismaService.menu.delete({
      where: { id: menuId },
    });

    return deleteItem;
  }

  // 149°) UpdateMenu...
  async update(menuId: string, updateMenuDto: UpdateMenuDto) {
    const itemFinded = await this.prismaService.menu.findUnique({
      where: {
        id: menuId,
      },
    });

    if (!itemFinded) {
      throw new NotFoundException(
        'O item que você deseja alterar não foi encontrado',
      );
    }

    if (updateMenuDto.item) {
      const itemExists = await this.prismaService.menu.findUnique({
        where: {
          item: updateMenuDto.item,
        },
      });

      if (itemExists) {
        throw new ConflictException('Item já cadastrado');
      }
    }

    const updatedMenu = await this.prismaService.menu.update({
      where: { id: menuId },
      data: {
        item: updateMenuDto.item,
        preco: updateMenuDto.preco,
        descricao: updateMenuDto.descricao,
        imagemUrl: updateMenuDto.imagemUrl,
      },
    });
    return updatedMenu;
  }

  // 150°) findUnique...
  async findUnique(menuId: string): Promise<Menu> {
    const itemFinded = await this.prismaService.menu.findUnique({
      where: { id: menuId },
    });

    if (!itemFinded) {
      throw new NotFoundException('Item não encontrado');
    }
    return itemFinded;
  }
}

// OBS.01: Após o item 143°, seguimos para o arquivo: update-menu.dto.ts
// OBS.01: Após o item 150°, seguimos para o arquivo: menu-controller.ts
