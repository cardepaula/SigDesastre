import { ApiModelProperty } from "@nestjs/swagger";

export class TweetsDto {
    @ApiModelProperty()
    id: number;
    @ApiModelProperty()
    twitterId: number;
    @ApiModelProperty()
    fonte: string;
    @ApiModelProperty()
    username: string;
    @ApiModelProperty()
    texto: string;
    @ApiModelProperty()
    data: string;
    @ApiModelProperty()
    retweets: number;
    @ApiModelProperty()
    favoritos: number;
    @ApiModelProperty()
    mentions: string;
    @ApiModelProperty()
    hashtags: string;
    @ApiModelProperty()
    geolocalizacao: string;

}