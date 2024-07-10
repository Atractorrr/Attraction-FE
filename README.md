![image](https://github.com/Atractorrr/Attraction-FE/assets/53262430/48768c80-721c-449f-8697-b66b1dafeea3)

# Attraction &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

뉴스레터 종합 관리/추천서비스 [어트랙션](https://attraction.run)의 공식 프론트엔드 레포지토리에요.

프로젝트의 장기적인 유지보수를 위해 [PNPM workspace](https://pnpm.io/workspaces)기반의 모노레포환경과 [FSD 아키텍쳐](https://feature-sliced.design/)를 기반으로 설계되었어요. 또한, 뉴스레터를 구독하고있는 사용자들에게 더 편리한 UI/UX를 제공하기 위해 노력하고 있어요.
어트랙션은 기존 뉴스레터 시스템을 사용하면서 느꼈던 `정보의 파편화`, `불편한 UI/UX`, `개인 맞춤형 시스템의 부재`문제를 해결하고자 해요.

## Features

> 어트랙션 레포지토리는 모노레포 구성을 채택하고있어 다양한 서비스들이 하나의 레포지토리에 존재해요.

### 📁 apps

> 현재는 어트랙션의 메인 서비스만 존재해요. 추후 다양한 서비스들이 추가될 예정이에요.

- [@attraction/service](https://github.com/Atractorrr/Attraction-FE/tree/main/apps/service): 어트렉션의 메인 서비스를 제공해요.

### 📁 packages

> 어트랙션의 공통 라이브러리들을 관리하는 폴더에요.

- [@attraction/config](https://github.com/Atractorrr/Attraction-FE/tree/main/packages/config): 프로젝트 설정 파일들을 관리하는 라이브러리에요.
- [@attraction/design-system](https://github.com/Atractorrr/Attraction-FE/tree/main/packages/design-system): 어트랙션의 UI/UX를 위한 디자인 시스템 라이브러리에요.
- [@attraction/icons](https://github.com/Atractorrr/Attraction-FE/tree/main/packages/icons): 어트랙션에서 사용되는 아이콘들을 관리하는 라이브러리에요. 

## Contributer

<a href="https://github.com/Atractorrr/Attraction-FE/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Atractorrr/Attraction-FE" />
</a>

## Contribution

> [!IMPORTANT]
> 
> 현재 본 저장소에서는 어트랙션 외부자의 기여를 받고 있지 않아요.
> 
> 제안해주실 내용이 있는 경우 [Issue를 등록](https://github.com/Atractorrr/Attraction-FE/issues) 해주시거나, [<support@attraction.run>](mailto:support@attraction.run)로 연락 바랍니다.
